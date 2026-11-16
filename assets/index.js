(function () {
  var e = React.createElement;
  var useState = React.useState;

  var me = {
    name: 'Olimjonov Ziyodulloh',
    id: '202537557',
    major: 'Computer Engineering'
  };

  var avatar =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="#241c1e"/><circle cx="40" cy="31" r="14" fill="#8d7240"/><path d="M12 74c4-16 15-24 28-24s24 8 28 24z" fill="#8d7240"/></svg>'
    );

  function Section(props) {
    return e('section', { className: 'lab-section' },
      e('header', { className: 'section-head' },
        e('span', { className: 'section-number' }, props.number),
        e('h2', null, props.title)
      ),
      props.note ? e('p', { className: 'section-note' }, props.note) : null,
      props.children
    );
  }

  function Greeting() {
    return e('p', { className: 'greeting' }, 'Hello, World!');
  }

  function StudentCard(props) {
    return e('div', { className: 'student-card' },
      e('h3', { className: 'student-name' }, props.name),
      e('p', { className: 'student-meta' }, 'ID: ' + props.id),
      e('p', { className: 'student-meta' }, 'Major: ' + props.major)
    );
  }

  function ProfileCard(props) {
    var src = props.avatarUrl || avatar;
    return e('div', { className: 'profile-card' },
      e('img', { className: 'profile-avatar', src: src, alt: props.name, width: '80', height: '80' }),
      e('h3', { className: 'profile-name' }, props.name),
      e('p', { className: 'profile-role' }, props.role),
      e('a', { className: 'profile-email', href: 'mailto:' + props.email }, props.email)
    );
  }

  var notifications = [
    { id: 1, type: 'success', message: 'Profile updated successfully' },
    { id: 2, type: 'warning', message: 'Password expires in 3 days' },
    { id: 3, type: 'info', message: 'New lecture materials available' }
  ];

  function NotificationItem(props) {
    var icon = props.type === 'success' ? '\u2705' : props.type === 'warning' ? '\u26A0\uFE0F' : '\u2139\uFE0F';
    return e('li', { className: 'notification ' + props.type },
      e('span', { className: 'notification-icon', 'aria-hidden': 'true' }, icon),
      e('span', null, props.message)
    );
  }

  function NotificationList() {
    return e('ul', { className: 'notification-list' },
      notifications.map(function (item) {
        return e(NotificationItem, { key: item.id, type: item.type, message: item.message });
      })
    );
  }

  function Card(props) {
    return e('div', { className: 'panel' },
      e('h3', { className: 'panel-title' }, props.title),
      e('div', { className: 'panel-body' }, props.children)
    );
  }

  function stars(rating) {
    var full = Math.floor(rating);
    var half = rating - full >= 0.5;
    var empty = 5 - full - (half ? 1 : 0);
    return '\u2605'.repeat(full) + (half ? '\u00BD' : '') + '\u2606'.repeat(empty);
  }

  function ProductCard(props) {
    return e('article', { className: 'product-card' },
      e('h3', { className: 'product-name' }, props.name),
      e('p', { className: 'product-price' }, props.price.toLocaleString('ko-KR') + '\uC6D0'),
      e('p', { className: 'product-stars', 'aria-hidden': 'true' }, stars(props.rating)),
      e('p', { className: 'product-rating' }, props.rating + ' / 5 stars'),
      e('p', { className: props.inStock ? 'stock in' : 'stock out' },
        props.inStock ? 'In Stock' : 'Out of Stock'
      )
    );
  }

  var products = [
    { id: 1, name: 'Wireless Earbuds', price: 89000, rating: 4.5, inStock: true },
    { id: 2, name: 'Mechanical Keyboard', price: 129000, rating: 4, inStock: true },
    { id: 3, name: 'USB-C Hub', price: 45000, rating: 3.5, inStock: false }
  ];

  function ProductGrid() {
    return e('div', { className: 'product-grid' },
      products.map(function (product) {
        return e(ProductCard, {
          key: product.id,
          name: product.name,
          price: product.price,
          rating: product.rating,
          inStock: product.inStock
        });
      })
    );
  }

  var students = [
    { id: 1, name: 'Lee Jungwoo', grade: 'A' },
    { id: 2, name: 'Park Sohee', grade: 'B+' },
    { id: 3, name: 'Kim Minho', grade: 'A-' }
  ];

  function StudentList() {
    return e('ul', { className: 'plain-list' },
      students.map(function (student) {
        return e('li', { key: student.id }, student.name + ' \u2014 ' + student.grade);
      })
    );
  }

  function Alert(props) {
    if (!props.message) return null;
    return e('p', { className: 'alert ' + props.type, role: 'status' },
      (props.type === 'error' ? 'ERROR: ' : 'OK: ') + props.message
    );
  }

  function Dashboard(props) {
    return e('div', { className: 'dashboard' },
      props.user
        ? e('p', null, 'Welcome, ' + props.user.name + '!')
        : e('p', null, 'Please log in.')
    );
  }

  function ConditionalDemo() {
    var state = useState(null);
    var user = state[0];
    var setUser = state[1];

    return e('div', { className: 'conditional-demo' },
      e(Alert, { type: 'error', message: user ? '' : 'You are not logged in.' }),
      e(Alert, { type: 'success', message: user ? 'Logged in successfully.' : '' }),
      e('div', { className: 'panel' },
        e(Dashboard, { user: user }),
        e('button', {
          type: 'button',
          className: 'toggle-btn',
          onClick: function () {
            setUser(user ? null : { name: 'Ziyodulloh' });
          }
        }, user ? 'Log out' : 'Log in')
      )
    );
  }

  function App() {
    return e('div', { className: 'app' },
      e('header', { className: 'page-header' },
        e('p', { className: 'eyebrow' }, 'Week 11 \u00B7 React Components & Props'),
        e('h1', null, 'React Lab'),
        e('p', { className: 'subtitle' },
          'Eight class exercises, each one a small component in its own file. Every card below receives its data through props.'
        ),
        e('p', { className: 'student-line' },
          me.name + ' \u00B7 ',
          e('span', { className: 'student-id' }, 'ID ' + me.id)
        )
      ),

      e(Section, {
        number: '01',
        title: 'Your first component',
        note: 'One function used three times \u2014 each use is an independent copy.'
      },
        e('div', { className: 'greeting-row' },
          e(Greeting),
          e(Greeting),
          e(Greeting)
        )
      ),

      e(Section, {
        number: '02',
        title: 'StudentCard',
        note: 'Props: name, id, major. The card shows my own student ID.'
      },
        e('div', { className: 'demo-grid' },
          e(StudentCard, { name: me.name, id: me.id, major: me.major })
        )
      ),

      e(Section, {
        number: '03',
        title: 'ProfileCard with a default prop',
        note: 'avatarUrl is optional \u2014 when it is not passed, the default avatar is used.'
      },
        e('div', { className: 'demo-grid' },
          e(ProfileCard, {
            name: 'Dr. Toshpulatov',
            role: 'Professor',
            email: 'muhiddin@gachon.ac.kr'
          })
        )
      ),

      e(Section, {
        number: '04',
        title: 'List of notifications',
        note: 'Rendered with .map() and a key from each id; the icon comes from conditional rendering.'
      },
        e(NotificationList)
      ),

      e(Section, {
        number: '05',
        title: 'Layout with props.children',
        note: 'The same Card component wraps two completely different pieces of content.'
      },
        e('div', { className: 'demo-block' },
          e(Card, { title: 'Lecture topics' },
            e('ul', { className: 'plain-list' },
              e('li', null, 'Components'),
              e('li', null, 'Props')
            )
          ),
          e(Card, { title: 'Homework' },
            e('p', null, 'Build a student portfolio component.')
          )
        )
      ),

      e(Section, {
        number: '06',
        title: 'ProductCard',
        note: 'Props: name, price in KRW, rating out of 5, inStock. Both bonuses are done.'
      },
        e(ProductGrid)
      ),

      e(Section, {
        number: '07',
        title: 'Rendering a list with keys',
        note: 'Every item has a unique, stable key \u2014 its id, not its position in the array.'
      },
        e(StudentList)
      ),

      e(Section, {
        number: '08',
        title: 'Conditional rendering',
        note: 'A component can return null, && shows a part only when its condition is true, and a ternary picks between two labels.'
      },
        e(ConditionalDemo)
      ),

      e('footer', { className: 'page-footer' },
        e('p', null, me.name + ' \u00B7 Student ID ' + me.id + ' \u00B7 Web Programming K0126_002')
      )
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(e(React.StrictMode, null, e(App)));
})();
