import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CartPage from "@/app/cart/page";
import { ToastContainer } from "react-toastify";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

const mockState = {
  cartItems: [],
  addToCart: jest.fn(),
  removeFromCart: jest.fn(),
  updateQuantity: jest.fn(),
  clearCart: jest.fn(),
  getCartCount: jest.fn(() => 0),
  getCartTotal: jest.fn(() => 0),
};

jest.mock("@/store/useCartStore", () => {
  return {
    useCartStore: jest.fn((selector) => selector(mockState)),
    __esModule: true,
    __setMockState: (newState: Partial<typeof mockState>) => {
      Object.assign(mockState, newState);
    },
  };
});

const { __setMockState } = jest.requireMock("@/store/useCartStore");

describe("CartPage", () => {
  it("renders empty cart message", () => {
    __setMockState({ cartItems: [] });
    render(
      <>
        <CartPage />
        <ToastContainer />
      </>
    );
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  it("renders cart with items", () => {
    const mockItem = {
      id: "1",
      title: "Mock Product",
      price: 50,
      quantity: 2,
      image: "/images/mock.jpg",
    };

    __setMockState({
      cartItems: [mockItem],
      getCartTotal: () => 100,
    });

    render(
      <>
        <CartPage />
        <ToastContainer />
      </>
    );

    expect(screen.getByText("Mock Product")).toBeInTheDocument();
    expect(screen.getByText("$50.00")).toBeInTheDocument();
    expect(screen.getByText("Total: $100.00")).toBeInTheDocument();
  });

  it("updates quantity when plus button clicked", () => {
    const updateQuantity = jest.fn();

    __setMockState({
      cartItems: [
        {
          id: "1",
          title: "Product",
          price: 10,
          quantity: 1,
          image: "/test.png",
        },
      ],
      updateQuantity,
      getCartTotal: () => 10,
    });

    render(
      <>
        <CartPage />
        <ToastContainer />
      </>
    );

    const plusButton = screen.getByText("+");
    fireEvent.click(plusButton);
    expect(updateQuantity).toHaveBeenCalledWith("1", 2);
  });
});
