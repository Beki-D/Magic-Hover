const counters = document.querySelectorAll(".counter");
const speed = 200;//the lower the faster

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target/speed;

        if(count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }

        console.log(target, count, increment);
    }

    updateCount();
})