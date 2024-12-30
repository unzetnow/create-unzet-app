import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container p-4 mx-auto">
      <Skeleton className="h-8 w-[200px] mb-4" />
      <Skeleton className="h-4 w-full max-w-[600px] mb-2" />
      <Skeleton className="h-4 w-full max-w-[500px]" />
    </div>
  );
}
