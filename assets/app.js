const render = (root) => {
  root.empty();
  const container = $('<div class="container"></div>');
  container.append(Header());

  root.append(container);
}

$(_ => {

  const root = $('.root');
  render(root);


});
