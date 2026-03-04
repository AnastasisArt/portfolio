import { redirect } from "next/navigation";
import { LOCALES } from "@/constants/i18n";

export default function RootPage() {
  redirect(`/${LOCALES[0]}`);
}
