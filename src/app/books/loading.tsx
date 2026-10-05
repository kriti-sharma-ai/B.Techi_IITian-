export default function Loading() {
  return (
    <div className="container-page py-10" aria-busy="true" aria-label="Loading">
      <div className="skeleton h-4 w-40" />
      <div className="skeleton mt-4 h-9 w-72" />
      <div className="skeleton mt-3 h-4 w-96 max-w-full" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="skeleton h-40" />
        ))}
      </div>
    </div>
  );
}
