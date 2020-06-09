    <!-- Demo section -->
    <section id="demo-section">
        <div class="container demo">

            <hr class="hr-green" />

            <h2>{{poms_demo_section_title}}</h2>

            <div class="row quote-text my-5">
                {{poms_demo_section_value}}
            </div>

            <!--div class="row">
                <img src="assets/laptop.png" class="laptop-mock-image mx-auto d-block">
            </!-- div -->

            <div class="content-center">
                <div class="video-generator-box">

                    <div class="row">

                        <!-- Name -->
                        <div class="col-lg-12">
                            <div class="input-field input-dark">
                                <input id="name" type="text">
                                <label for="name">Name</label>
                            </div>
                        </div>

                        <!-- Email -->
                        <div class="col-lg-12">
                            <div class="input-field input-dark">
                                <input name="email" id="email" type="email">
                                <label for="email">Email</label>
                            </div>
                        </div>
                    </div>

                    <div class="row ">

                        <!-- Interest I -->
                        <div class="input-dark input-select col-sm-12 col-lg-6">
                            <label for="interest1">Interest I</label>
                            <select name="0#interest1" id="interest1">
                                <option value="style">Style & Fashion</option>
                                <option value="gastro">Gastronomy</option>
                                <option value="tech">Technology</option>
                                <option value="beauty">Wellness & Beauty</option>
                                <option value="dive">Scuba diving</option>
                                <option value="run">Running</option>
                                <option value="golf">Golf</option>
                                <option value="yoga">Yoga</option>
                                <option value="tennis">Tennis</option>
                                <option value="trip">Travelling</option>
                                <option value="sail">Sailling</option>
                            </select>
                        </div>

                        <!-- Interest II -->
                        <div class="input-dark input-select col-sm-12 col-lg-6">
                            <label for="interest2">Interest II</label>
                            <select name="0#interest2" id="interest2">
                                <option value="tech">Technology</option>
                                <option value="style">Style & Fashion</option>
                                <option value="gastro">Gastronomy</option>
                                <option value="beauty">Wellness & Beauty</option>
                                <option value="dive">Scuba diving</option>
                                <option value="run">Running</option>
                                <option value="golf">Golf</option>
                                <option value="yoga">Yoga</option>
                                <option value="tennis">Tennis</option>
                                <option value="trip">Travelling</option>
                                <option value="sail">Sailling</option>
                            </select>
                        </div>
                    </div>
                    <div class="row ">

                        <!-- Person age -->
                        <div class="input-dark input-select col-sm-12 col-lg-6">
                            <label for="person">Person</label>
                            <select name="0#person" id="person">
                                <option value="young_man">Young man</option>
                                <option value="young_woman">Young woman</option>
                                <option value="old_man">Elder man</option>
                                <option value="old_woman">Elder woman</option>
                            </select>
                        </div>

                        <!-- Audi owner -->
                        <div class="input-dark input-select col-sm-12 col-lg-6">
                            <label for="owner">Audi Owner</label>
                            <select name="0#owner" id="owner">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                    <div class="row ">

                        <!-- Model -->
                        <div class="input-dark input-select col-sm-12 col-lg-6">
                            <label for="model">Model</label>
                            <select name="0#model" id="model">
                                <option value="a6">A6</option>
                                <option value="a7">A7</option>
                                <option value="a8">A8</option>
                                <option value="q8">Q8</option>
                            </select>
                        </div>

                        <!-- Travelling -->
                        <div class="input-dark input-select col-sm-12 col-lg-6">
                            <label for="travel">Travelling</label>
                            <select name="0#travel" id="travel">
                                <option value="hills">Hills</option>
                                <option value="mountain">Mountain</option>
                                <option value="dessert">Dessert</option>
                                <option value="beach">Beach</option>
                                <option value="city">City</option>
                            </select>
                        </div>
                    </div>
                    <div class="row ">

                        <!-- Family -->
                        <div class="input-dark input-select col-sm-12 col-lg-6">
                            <label for="family">Family</label>
                            <select name="0#family" id="family">
                                <option value="single_0">Single without children</option>
                                <option value="single_1">Single with one child</option>
                                <option value="single_2">Single with two children</option>
                                <option value="married_0">Married without children</option>
                                <option value="married_1">Married with one child</option>
                                <option value="married_2">Married with two children</option>
                            </select>
                        </div>

                        <!-- Socializing -->
                        <div class="input-dark input-select col-sm-12 col-lg-6">
                            <label for="social">Socializing</label>
                            <select name="#social" id="social">
                                <option value="friends">Friends</option>
                                <option value="family">Family</option>
                                <option value="love">Love</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <!-- Response -->
                        <div id="response">
                        </div>
                    </div>
                    <div class="row my-5">

                        <div class="button-group d-flex justify-content-between">

                            <div class="try-it-yourself">Try it yourself</div>

                            <!-- Create Video -->
                            <button id="create-expo-video" class="input-button">
                                <i class="fa fa-film"></i> CREATE MY VIDEO
                            </button>

                            <!-- Download Video -->
                            <form id="download" method="get" target="_blank" action="">
                                <button id="download-expo-video" class="input-button" disabled>
                                    <i class="fa fa-download"></i> DOWNLOAD MY VIDEO
                                </button>
                            </form>

                            <!-- Send Video -->
                            <form id="send-expo-form" method="post"
                                action="https://pomscloud.ie/src/handlers/sendHandler.php">
                                <button id="send-expo-video" type="submit" class="input-button" disabled>
                                    <i class="fa fa-envelope"></i> SEND MY VIDEO
                                </button>
                            </form>


                        </div>
                    </div>

                </div>
            </div>

            <hr class="hr-green" />
        </div>
    </section>