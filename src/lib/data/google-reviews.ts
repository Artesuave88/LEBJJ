export const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps?cid=15351201601750732712';

export type GoogleReview = {
  id: string;
  name: string;
  authorName: string;
  authorUrl?: string;
  avatarUrl?: string;
  reviewUrl?: string;
  date: string;
  rating: number;
  quote: string;
};

export type GoogleReviewsResponse = {
  reviews: GoogleReview[];
  averageRating: number | null;
  totalReviewCount: number | null;
};

// Review excerpts checked against Google Maps on 9 September 2026.
// Update manually; this data never makes paid API requests.
export const googleReviews: GoogleReviewsResponse = {
  "reviews": [
    {
      "id": "ChdDSUhNMG9nS0VJQ0FnSURwd2VYUjJRRRAB",
      "name": "Lizzie",
      "authorName": "Lizzie",
      "authorUrl": "https://www.google.com/maps/contrib/107559531133647768557/reviews?hl=en-GB",
      "reviewUrl": "https://www.google.com/maps/contrib/107559531133647768557/reviews?hl=en-GB",
      "date": "",
      "rating": 5,
      "quote": "It’s great for women to join, everyone is super friendly"
    },
    {
      "id": "ChZDSUhNMG9nS0VJQ0FnSURWNjVUOFJnEAE",
      "name": "James",
      "authorName": "James",
      "authorUrl": "https://www.google.com/maps/contrib/116545015220675865518/reviews?hl=en-GB",
      "reviewUrl": "https://www.google.com/maps/contrib/116545015220675865518/reviews?hl=en-GB",
      "date": "",
      "rating": 5,
      "quote": "Emma, Mark and the team have literally built the place and are always there to help anyone."
    },
    {
      "id": "ChdDSUhNMG9nS0VJQ0FnSUQydHVTbm1BRRAB",
      "name": "Alan",
      "authorName": "Alan",
      "authorUrl": "https://www.google.com/maps/contrib/109675721288144934827/reviews?hl=en-GB",
      "reviewUrl": "https://www.google.com/maps/contrib/109675721288144934827/reviews?hl=en-GB",
      "date": "",
      "rating": 5,
      "quote": "The kids BJJ classes are brilliant!"
    },
    {
      "id": "ChZDSUhNMG9nS0VJQ0FnSUNyNWFySEtBEAE",
      "name": "David",
      "authorName": "David",
      "authorUrl": "https://www.google.com/maps/contrib/101533957289017717703/reviews?hl=en-GB",
      "reviewUrl": "https://www.google.com/maps/contrib/101533957289017717703/reviews?hl=en-GB",
      "date": "",
      "rating": 5,
      "quote": "This place is awesome! Super friendly crew and a great mat space."
    },
    {
      "id": "ChZDSUhNMG9nS0VJQ0FnSURBeHN2X0N3EAE",
      "name": "Carl",
      "authorName": "Carl",
      "authorUrl": "https://www.google.com/maps/contrib/110931349237230996808/reviews?hl=en-GB",
      "reviewUrl": "https://www.google.com/maps/contrib/110931349237230996808/reviews?hl=en-GB",
      "date": "",
      "rating": 5,
      "quote": "The instructors are fantastic, always taking time with the students on how to refine the technique."
    }
  ],
  "averageRating": 5,
  "totalReviewCount": 18
};
