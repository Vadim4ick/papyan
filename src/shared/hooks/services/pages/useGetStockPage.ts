"use client";

import { gql } from "@/graphql/client";
import { useQuery } from "@tanstack/react-query";

const useGetStockPage = () => {
  return useQuery({
    queryFn: () => gql.GetStockPage(),
    queryKey: ["stock_page"],
  });
};

export { useGetStockPage };
