import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    // Flex column
    <div>
      {/* Sidebar */}
      <section></section>

      <section>
        {/* top nav */}
        <nav></nav>

        {/* Body */}
        <main>
          <Outlet />
        </main>
      </section>
    </div>
  );
}

export default HomeLayout;
