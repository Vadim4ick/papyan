import { gql } from "@/graphql/client";
import { useQuery } from "@tanstack/react-query";

const useGetServicesPage = () => {
  return useQuery({
    queryFn: () => gql.GetServicesPage(),
    queryKey: ["services_page"],
  });
};

export { useGetServicesPage };
