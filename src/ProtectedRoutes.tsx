import { Navigate } from "react-router-dom";
import { auth } from "./fbase";

// export default function ProtectedRoute({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const user = auth.currentUser;
//   if (user === null) {
//     return <Navigate to="/login" />;
//   }
//   return children;
// }
type WrapperProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: WrapperProps) {
  const user = auth.currentUser;
  if (user === null) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
}
