import { Review } from "@/types/products";

interface ProductReviewsProps {
  reviews: Review[];
}

export default function ProductReviews({ reviews }: ProductReviewsProps) {
  if (!reviews?.length) return null;

  return (
    <section className="mt-5">
      <ul className="space-y-6">
        {reviews.map((review) => (
          <li key={review.id} className="border-t pt-4 font-(family-name:--font-afacad)">
            <p className="text-xl font-semibold">{review.username}</p>
            <p className="text-lg text-gray-700 mt-1">{review.description}</p>
            <p className="text-lg text-gray-500 mt-1">Rating: {review.rating}/5</p>
          </li>
        ))}
      </ul>
    </section>
  );
}