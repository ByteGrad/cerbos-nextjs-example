import { Button } from "./ui/button";

export default function ApproveBtn({ children }) {
  return (
    <Button size="sm" variant="positive">
      {children}
    </Button>
  );
}
