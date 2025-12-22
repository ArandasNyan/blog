import dayjs from "dayjs";

/**
 * Formata uma data ISO (YYYY-MM-DD) para texto legível em português
 * @param {string} dateString - Data no formato ISO (YYYY-MM-DD)
 * @returns {string} Data formatada (ex: "24 de dezembro de 2025")
 */
export function formatDate(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);

  return dayjs(date).format("DD MMM, YYYY");
}
