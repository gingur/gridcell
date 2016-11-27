export default function (Component, options) {
  const value = `${Component.displayName || Component.name}HOC`;
  return Object.defineProperty(class HOC extends Component {
    get options() {
      return options;
    }
  }, 'name', {
    value,
    writable: false,
    enumerable: false,
    configurable: true
  });
}