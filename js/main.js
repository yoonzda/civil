document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------
    // 1. Mega Dropdown Navigation
    // ----------------------------
    const header = document.querySelector('.header');
    const gnbWrapper = document.querySelector('.gnb-wrapper');
    const megaDropdown = document.querySelector('.mega-dropdown');
    const megaBg = document.querySelector('.mega-bg');

    const openMegaMenu = () => {
        header.classList.add('hovered');
    };

    const closeMegaMenu = () => {
        header.classList.remove('hovered');
    };

    gnbWrapper.addEventListener('mouseenter', openMegaMenu);
    megaDropdown.addEventListener('mouseenter', openMegaMenu);

    header.addEventListener('mouseleave', closeMegaMenu);
    megaBg.addEventListener('mouseenter', closeMegaMenu);


    // ----------------------------
    // 2. Calendar Widget Setup
    // ----------------------------
    const calGrid = document.getElementById('calendarGrid');
    const calMonthDisplay = document.getElementById('calMonthDisplay');

    // Dummy events for demonstration
    const dummyEvents = [5, 10, 15, 20, 24]; 

    function renderCalendar() {
        const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
        calGrid.innerHTML = '';

        // Add day names row
        daysOfWeek.forEach(day => {
            const el = document.createElement('div');
            el.className = 'cal-day-name';
            el.innerText = day;
            calGrid.appendChild(el);
        });

        // Add dummy empty cells for offset (assume month starts on a Sunday for this demo)
        const offset = 0; 
        for(let i=0; i<offset; i++) {
            const emptyCell = document.createElement('div');
            calGrid.appendChild(emptyCell);
        }

        // Render 31 days
        for(let i=1; i<=31; i++) {
            const cell = document.createElement('div');
            cell.className = 'cal-cell';
            cell.innerText = i;

            if (i === 10) {
                cell.classList.add('today', 'has-event');
            } else if (dummyEvents.includes(i)) {
                cell.classList.add('has-event');
            }

            cell.addEventListener('mouseenter', () => {
                if(cell.classList.contains('has-event')) {
                    document.querySelectorAll('.cal-cell').forEach(c => c.classList.remove('active'));
                    cell.classList.add('active');
                }
            });

            calGrid.appendChild(cell);
        }
    }

    renderCalendar();

});
