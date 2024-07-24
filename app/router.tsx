import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";

export function createRouter() {
  const queryClient = new QueryClient();
  const router = createTanStackRouter({
    routeTree,
  });
  const augmented = routerWithQueryClient(router, queryClient);

  return augmented;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
