"use client";

import { gql } from "@/graphql/client";
import { useQuery } from "@tanstack/react-query";

const useGetAboutPage = () => {
  return useQuery({
    queryFn: () => gql.GetAboutPage(),
    queryKey: ["about_page"],
  });
};

export { useGetAboutPage };
