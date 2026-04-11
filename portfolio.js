// Mouse spotlight
    document.addEventListener('mousemove', e => {
        document.body.style.setProperty('--mx', e.clientX + 'px');
        document.body.style.setProperty('--my', e.clientY + 'px');
    });

    // Active nav
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let cur = '';
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 200) cur = s.id;
        });
        navItems.forEach(n => {
            n.classList.toggle('active', n.getAttribute('href') === '#' + cur);
        });
    });

    // Cert modal
    function openCertModal(data) {
        document.getElementById('m-issuer').textContent = data.issuer;
        document.getElementById('m-title').textContent = data.title;
        document.getElementById('m-desc').textContent = data.desc;
        document.getElementById('m-org').textContent = data.org;
        document.getElementById('m-date').textContent = data.date;
        document.getElementById('m-id').textContent = data.id;
        document.getElementById('m-cat').textContent = data.cat;
        const tagsEl = document.getElementById('m-tags');
        tagsEl.innerHTML = data.tags.map(t => `<span class="tag">${t}</span>`).join('');
        // PDF link
        const pdfWrap = document.getElementById('m-pdf-wrap');
        const pdfLink = document.getElementById('m-pdf-link');
        if (data.pdf) {
            pdfLink.href = data.pdf;
            pdfLink.removeAttribute('download');
            pdfWrap.style.display = 'block';
        } else {
            pdfWrap.style.display = 'none';
        }
        document.getElementById('certModal').classList.add('open');
    }

    function closeCertModal(e) {
        if (e.target === document.getElementById('certModal')) {
            document.getElementById('certModal').classList.remove('open');
        }
    }

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            document.getElementById('certModal').classList.remove('open');
        }
    });