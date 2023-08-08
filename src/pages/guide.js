import PageMenu from "../components/PageMenu";
import PageContent from "../components/PageContent";
import MainLayout from "@/components/MainLayout";

export default function Portal() {
  return (
    <MainLayout>
      <PageMenu currentPage={0} />
      <PageContent>Guide</PageContent>
    </MainLayout>
  );
}
