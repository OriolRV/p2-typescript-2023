import { writeFile } from "fs/promises";
import { render } from "./pau_render.ts";
import { loadUsers } from "./pau_users.ts";

const users = await loadUsers(100);
const html = render(users);
await writeFile("users.html", html);
