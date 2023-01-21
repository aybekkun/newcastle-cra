import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Spinner from "../components/PublicComponents/Spinner";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import RegisterLayout from "../layouts/RegisterLayout";
import AdminLayout from "../layouts/AdminLayout";

const Course = lazy(() => import("../components/PublicComponents/Course"));
const AddCoursePage = lazy(() => import("../pages/admin/AddCoursePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const BillingPage = lazy(() => import("../pages/admin/BillingPage"));
const GeneralPage = lazy(() => import("../pages/admin/GeneralPage"));
const LessonAddPage = lazy(() => import("../pages/admin/LessonAddPage"));
const SettingsPage = lazy(() => import("../pages/admin/SettingsPage"));
const StatistikaPage = lazy(() => import("../pages/admin/StatistikaPage"));
const CoursePage = lazy(() => import("../pages/CoursePage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const NotFound = lazy(() => import("../pages/NotFound"));
const PopularPage = lazy(() => import("../pages/PopularPage"));
const SignIn = lazy(() => import("../pages/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp"));

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<Spinner />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/courses"
            element={
              <Suspense fallback={<Spinner />}>
                <PopularPage />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Spinner />}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="/course"
            element={
              <Suspense fallback={<Spinner />}>
                <CoursePage />
              </Suspense>
            }
          >
            <Route
              path="/course/:id/:courseId"
              element={
                <Suspense fallback={<Spinner />}>
                  <Course />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route path="/signup" element={<RegisterLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<Spinner />}>
                <SignUp />
              </Suspense>
            }
          />
        </Route>
        <Route path="/signin" element={<RegisterLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<Spinner />}>
                <SignIn />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Spinner />}>
                <GeneralPage />
              </Suspense>
            }
          />
          <Route
            path="settings"
            element={
              <Suspense fallback={<Spinner />}>
                <SettingsPage />
              </Suspense>
            }
          />
          <Route
            path="statistika"
            element={
              <Suspense fallback={<Spinner />}>
                <StatistikaPage />
              </Suspense>
            }
          />
          <Route
            path="billing"
            element={
              <Suspense fallback={<Spinner />}>
                <BillingPage />
              </Suspense>
            }
          />
          <Route
            path="addcourse"
            element={
              <Suspense fallback={<Spinner />}>
                <AddCoursePage />
              </Suspense>
            }
          />
          <Route
            path="lesson"
            element={
              <Suspense fallback={<Spinner />}>
                <LessonAddPage />
              </Suspense>
            }
          >
            <Route
              path=":id"
              element={
                <Suspense fallback={<Spinner />}>
                  <LessonAddPage />
                </Suspense>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Routing;
