    <!-- Map section -->
    <section id="map-section">
        <div class="container map-section" style="padding-bottom: 200px">
            <h2 class="map-title mb-5">{{contact_title}}</h2>

            <div class="map persons" id="map">
                <img src="{{background_image_1_contact_map}}" class="map-image position-relative mx-auto d-block w-100">

                <!-- Persons append here -->

            </div>

            <div id="country-select" class="input-dark input-select mb-5 position-relative">
                <select name="#country" id="country">
                </select>
            </div>

        </div>
    </section>

    <script>
        const readyStateCheckInterval = setInterval(() => {
            if (document.readyState === "complete") {
                clearInterval(readyStateCheckInterval);
                document.querySelector('body').style.opacity = 1;
            }
        }, 10);
    </script>