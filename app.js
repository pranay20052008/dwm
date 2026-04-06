// ── View navigation ──────────────────────────────────────────────
function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const view = document.getElementById('view-' + name);
  if (view) view.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(n => {
    if (n.getAttribute('onclick') && n.getAttribute('onclick').includes("'" + name + "'")) {
      n.classList.add('active');
    }
  });
}

// ── Kanban drag & drop ───────────────────────────────────────────
let dragged = null;

function onDrag(e) {
  dragged = e.currentTarget;
  setTimeout(() => {
    if (dragged) dragged.classList.add('dragging');
  }, 0);
}

function onOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function onDrop(e, colId) {
  e.preventDefault();
  if (!dragged) return;
  dragged.classList.remove('dragging');

  const col = document.getElementById(colId);
  const addBtn = col.querySelector('.col-add');
  col.insertBefore(dragged, addBtn);

  updateCounts();
  dragged = null;
}

document.addEventListener('dragend', () => {
  if (dragged) dragged.classList.remove('dragging');
  dragged = null;
});

function updateCounts() {
  ['backlog', 'inprogress', 'review', 'done'].forEach(id => {
    const col = document.getElementById('col-' + id);
    if (!col) return;
    const count = col.querySelectorAll('.card').length;
    const counter = document.getElementById('cnt-' + id);
    if (counter) counter.textContent = count;
  });
}

// ── Tabs ─────────────────────────────────────────────────────────
document.querySelectorAll('.tab-group').forEach(group => {
  group.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      group.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
});

// ── Init ─────────────────────────────────────────────────────────
updateCounts();
