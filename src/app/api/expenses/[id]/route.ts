import cerbos from "@/lib/cerbos-server";
import { expense } from "@/lib/example-data";
import { NextResponse } from "next/server";

export async function GET(req: Request, params: { id: string }) {
  // 1) authn check: get user info (from Kinde, Okta/Auth0, NextAuth, etc.)
  // const user = await getUser();
  // if (!user) {
  //   redirect("/login");
  // }
  const user = {
    id: "clsdcjf06000008lccu6ud5et",
    name: "Lisa",
    roles: ["MANAGER"],
  };

  // 2) get resource info (from database)
  // const expense = await prisma.expense.findUnique({
  //   where: { id: params.id },
  // });
  const expense = {
    id: "6354645",
    description: "Lunch with team",
    amount: 300,
    status: "PENDING",
    createdBy: "clsdcjf06000008lccu6ud5et",
  };

  // 3) authz check
  const decision = await cerbos.checkResource({
    principal: {
      id: user.id,
      roles: user.roles,
      attr: user,
    },
    resource: {
      id: expense.id,
      kind: "expense",
      attr: expense,
    },
    actions: ["view"],
  });
  console.log(decision.isAllowed("view"));

  if (!decision.isAllowed("view")) {
    return NextResponse.json(
      {
        error: "Not authorized.",
      },
      {
        status: 403,
      }
    );
  }

  // 4) return expense for viewing
  return NextResponse.json(expense);
}

export async function PUT(req: Request, params) {
  // 1) authn check: get user info (from Kinde, Okta/Auth0, NextAuth, etc.)
  // const user = await getUser();
  // if (!user) {
  //   redirect("/login");
  // }
  const user = {
    id: "clsdcjf06000008lccu6ud5et",
    name: "Lisa",
    roles: ["MANAGER"],
  };

  // 2) get resource info (from database)
  // const expense = await prisma.expense.findUnique({
  //   where: { id: params.id },
  // });
  const expense = {
    id: "6354645",
    description: "Lunch with team",
    amount: 300,
    status: "PENDING",
    createdBy: "clsdcjf06000008lccu6ud5et",
  };

  // 3) authz check
  const decision = await cerbos.checkResource({
    principal: {
      id: user.id,
      roles: user.roles,
      attr: user,
    },
    resource: {
      id: expense.id,
      kind: "expense",
      attr: expense,
    },
    actions: ["approve"],
  });
  if (!decision.isAllowed("approve")) {
    return NextResponse.json(
      {
        error: "Not authorized.",
      },
      {
        status: 403,
      }
    );
  }

  // update database
  // const { approved } = await req.json();

  // await prisma.expense.update({
  //   where: { id: params.id },
  //   data: {
  //     status: approved,
  //   },
  // });
}
