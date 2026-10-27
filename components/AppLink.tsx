import Link from "next/link";
import type { ComponentProps } from "react";

// En export statique, les charges RSC sont écrites dans des chemins imbriqués
// que le préchargement client ne retrouve pas. On le désactive pour éviter des 404.
export function AppLink(props: ComponentProps<typeof Link>) {
  return <Link {...props} prefetch={false} />;
}
