import { GRPC } from "@cerbos/grpc";

const cerbos = new GRPC("localhost:3592", { tls: false }); // Connect to the local Cerbos PDP instance

export default cerbos;
