<script lang="ts">
  import { GOOGLE_REVIEWS_URL, googleReviews } from '$lib/data/google-reviews'
</script>

<section aria-label="Google reviews" class="space-y-4">
  <div class="flex flex-wrap items-center justify-between gap-3">

    <a href="https://search.google.com/local/writereview?placeid=ChIJz1mxaabpeUgRqI_Cy4VsCtU" target="_blank" rel="noopener noreferrer" class="text-sm font-semibold text-red-700 underline underline-offset-4">Leave a review ↗</a>
  </div>

  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
    {#each googleReviews.reviews as review}
      <article class="flex min-w-0 flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
        <div class="flex items-center gap-2">
          <span aria-hidden="true" class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-red-700">{review.name.charAt(0)}</span>
          <h3 class="text-sm font-semibold text-zinc-950">{review.name}</h3>
        </div>
        <p aria-label={`${review.rating} out of 5 stars`} class="mt-3 text-sm tracking-widest text-amber-500"><span aria-hidden="true">{'★'.repeat(review.rating)}</span></p>
        <blockquote class="mt-3 flex-1 text-sm leading-relaxed text-zinc-700">
          <p>“{review.quote}”</p>
        </blockquote>
        <a href={review.reviewUrl || GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" aria-label={`Read ${review.name}'s full review on Google Maps`} class="mt-5 text-xs font-semibold text-red-700 underline underline-offset-4">Read full review ↗</a>
      </article>
    {/each}
  </div>
</section>
