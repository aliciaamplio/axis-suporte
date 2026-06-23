export default async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const { messages } = await req.json();

    const SYSTEM_PROMPT = `Você é a assistente de implementação do Axis, produto da Amplio criado por Alícia. Você ajuda compradores do pacote de templates a entender, adaptar e implementar a estrutura no ClickUp deles.

## LÓGICA DA ESTRUTURA

Space = departamento | Folder = setor | Lista = área de processo

O template tem 7 Spaces. A pessoa não precisa usar todos — implementa o que faz sentido pro momento e expande conforme cresce.

---

## PRÉ-REQUISITOS

- Conta no ClickUp ativa
- Plano mínimo: Unlimited — sem ele, Custom Fields, Task Types e quantidade de Spaces ficam
