import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/pt-br";

// plugins (ordem correta)
dayjs.extend(utc);
dayjs.extend(timezone);

// locale em português
dayjs.locale("pt-br");

/**
 * Formata uma data ISO (YYYY-MM-DD) para texto legível em português
 * @param {string} dateString - Data no formato ISO (YYYY-MM-DD)
 * @returns {string} Data formatada (ex: "24 DEZ, 2025")
 */
export function formatDate(dateString) {
  if (!dateString) return "";

  return dayjs(dateString)
    .tz("America/Sao_Paulo")
    .format("DD MMM, YYYY")
    .toUpperCase();
}
