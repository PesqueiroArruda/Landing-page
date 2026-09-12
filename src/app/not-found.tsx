import { Fish } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-paper px-4 text-center">
      <Fish className="h-16 w-16 text-lake" strokeWidth={1.5} />
      <div>
        <h1 className="text-4xl font-semibold text-ink sm:text-5xl">
          Essa página escapou como peixe grande
        </h1>
        <p className="mt-4 max-w-md text-base text-bark/70 sm:text-lg">
          Não encontramos a página que você procurava. Que tal voltar pro
          lago principal?
        </p>
      </div>
      <Button href="/" variant="primary">
        Voltar ao site
      </Button>
    </main>
  );
}
