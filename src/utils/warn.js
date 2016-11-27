const PROD = typeof process === "undefined" || !process.env || process.env.NODE_ENV === "production";

export default PROD ? () => {
  // Noop
} : function (message) {
  (console.warn || console.log)(`GridCell: ${message}`);
};