"use client";

import { gql } from "@/graphql/client";
import { useQuery } from "@tanstack/react-query";

const useGetServicesBlocksFilterByServices = ({ id }: { id: string }) => {
  return useQuery({
    queryFn: () =>
      gql.GetServicesBlockFilterByService({
        id: id,
      }),
    queryKey: ["services_bloks_filter_by_services", id],
  });
};

export { useGetServicesBlocksFilterByServices };
