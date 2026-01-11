"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

/**
 * Retorna para a página **anterior** da navegação 
 */
export function ReturnButton() {
  const router = useRouter();

  function handleBack() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto pt-12 pb-6 px-6 flex items-center justify-start">
      <button
        type="button"
        onClick={handleBack}
        className="flex gap-2 text-lg text-neutral-500 hover:text-neutral-300 hover:font-medium transition-all transition-discrete"
      >
        <ArrowLeft />
        Voltar
      </button>
    </div>
  );
}
