Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('./index.less');

const _react = _interopRequireDefault(require('react'));

const _classnames = _interopRequireDefault(require('classnames'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _default = function _default(_ref) {
  const { className } = _ref;
  const { links } = _ref;
  const { copyright } = _ref;
  const clsString = (0, _classnames.default)('ant-pro-global-footer', className);
  return _react.default.createElement(
    'footer',
    {
      className: clsString,
    },
    links &&
      _react.default.createElement(
        'div',
        {
          className: 'ant-pro-global-footer-links',
        },
        links.map(link =>
          _react.default.createElement(
            'a',
            {
              key: link.key,
              title: link.key,
              target: link.blankTarget ? '_blank' : '_self',
              href: link.href,
            },
            link.title,
          ),
        ),
      ),
    copyright &&
      _react.default.createElement(
        'div',
        {
          className: 'ant-pro-global-footer-copyright',
        },
        copyright,
      ),
  );
};

exports.default = _default;
