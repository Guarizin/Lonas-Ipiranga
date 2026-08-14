const numerosWhatsapp = ['5511973300025', '5511974669073'];

export function getWhatsappNumber(): string {
  const minutoAtual = new Date().getMinutes();
  const index = minutoAtual % numerosWhatsapp.length;
  return numerosWhatsapp[index];
}

export function getWhatsappLink(mensagem?: string): string {
  const numero = getWhatsappNumber();
  const textoPadrao =
    'Olá! Vim pelo site e gostaria de solicitar um orçamento.';
  const texto = encodeURIComponent(mensagem || textoPadrao);
  return `https://wa.me/${numero}?text=${texto}`;
}
