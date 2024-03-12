"use client";

import ApproveBtn from "@/components/approve-btn";
import EditBtn from "@/components/edit-btn";
import { useEffect, useState } from "react";
import { Expense } from "@/lib/types";
import cerbos from "@/lib/cerbos-browser";
import { useCerbos } from "@/lib/hooks";

const id = "6354645";

export default function ExpensePage() {
  const [expense, setExpense] = useState<Expense | null>(null);
  const [canEdit, setCanEdit] = useState(false);
  const [canApprove, setCanApprove] = useState(false);

  // const canApprove = useCerbos(user, expense, "approve");

  // 1) authn check: get user info (from Kinde, Okta/Auth0, NextAuth, etc.)
  // const { data: session } = useSession();
  // const user = {
  //   id: "clsdcjf06000008lccu6ud5et",
  //   name: "Lisa",
  //   roles: ["USER"],
  // };

  // 2) get resource info
  // useEffect(() => {
  //   const fetchExpense = async () => {
  //     const res = await fetch(`/api/expenses/${id}`);
  //     const data = await res.json();
  //     setExpense(data);
  //   };

  //   fetchExpense();
  // }, [id]);

  // 3) authz check
  // useEffect(() => {
  //   if (!expense) return;

  //   const checkAuthz = async () => {
  //     const decision = await cerbos.checkResource({
  //       principal: {
  //         id: user.id,
  //         roles: user.roles,
  //         attr: user,
  //       },
  //       resource: {
  //         id: expense.id,
  //         kind: "expense",
  //         attr: expense,
  //       },
  //       actions: ["edit", "approve"],
  //     });

  //     setCanEdit(decision.isAllowed("edit")!);
  //     setCanApprove(decision.isAllowed("approve")!);
  //   };

  //   checkAuthz();
  // }, [expense, user]);

  return (
    <main className="px-12 py-8">
      <h1 className="text-3xl font-bold mb-4 border-b pb-3 border-black/10">
        Expense #{id}
      </h1>

      <div className="flex items-center gap-6">
        <section>
          <h2 className="font-semibold">Description</h2>
          <p>{expense?.description}</p>
        </section>

        <section>
          <h2 className="font-semibold">Amount</h2>
          <p>${expense?.amount}</p>
        </section>

        <div className="ml-auto space-x-2">
          {canEdit && <EditBtn>Edit</EditBtn>}
          {canApprove && <ApproveBtn>Approve</ApproveBtn>}
        </div>
      </div>
    </main>
  );
}
