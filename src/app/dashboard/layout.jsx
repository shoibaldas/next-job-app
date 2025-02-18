// app/dashboard/layout.js
import PageTransition from "@/components/PageTransition";
import Drawer from "@/components/Drawer";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <PageTransition>
        <Drawer>
          {children}
        </Drawer>
      </PageTransition>
    </div>
  );
}