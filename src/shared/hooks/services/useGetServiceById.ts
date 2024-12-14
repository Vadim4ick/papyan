"use client";

import { gql } from "@/graphql/client";
import { useQuery } from "@tanstack/react-query";

const useGetServiceById = ({ id }: { id: string }) => {
  return useQuery({
    queryFn: () =>
      gql.GetServiceById({
        id: id,
      }),
    queryKey: ["services_by_id"],
  });
};

export { useGetServiceById };
