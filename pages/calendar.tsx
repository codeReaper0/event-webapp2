import MainLayout from "@/components/layout/mainLayout";
import MyCalendar from "@/components/layout/myCalendar";
import Header from "@/components/header";
export default function Calendar() {
    return (
      <MainLayout>
        <div className="grid">
          <Header title={"Calendar"} info={"Stay Connected to Your People’s Events."} />
          <MyCalendar />
        </div>
      </MainLayout>
    )
}
  