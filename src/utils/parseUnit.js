export default function parseUnit(value, fallback = 'px') {
  const number = Number.parseFloat(value);
  const unit = (value + "").substr((number + "").length) || fallback;
  return {
    number,
    unit
  }
}