    <!-- Header section -->
    <header id="header-section">
        <div class="header-logo w-100">
            <img class="my-3" src="assets/poms_logo_2020_black.png" style="max-height: 180px; opacity: 0.5">
        </div>

        <hr />
    </header>


    <!-- Robot section -->
    <section id="robot-section">
        <div class="container robot-section">

            <div class="row robot-header-text">
                <div class="col-md-12 w-100 py-5">
                    <h3 class="mb-5">{{header_title}}</h3>
                </div>
            </div>

            <div class="row robot-cards mt-5">

                <!-- Left -->
                <div class="col-md-12 col-lg-4 margin-left-mobile">

                    <label class="label label-left">{{challenge_title}}</label>

                    <div class="card card-sliders" id="card-sliders">
                        <div class="card-brand-logo" id="card-brand-logo" style="background-color: {{brand_logo_background_color}};">
                            <img class="card-brand-logo-image" src="{{brand_logo_image_1}}">
                        </div>

                        <div class="slider-container" id="slider-paragraph">
                            <p class="paragraph">{{slider_paragraph}}</p>
                        </div>

                        <div class="slider-container" id="slider-container-1">
                            <div class="slider-label">{{slider1_label}}</div>
                            <div class="slider">
                                <div class="slider-process-container" id="slider-process-1" data-width="{{slider1_width}}">
                                    <div class="slider-process slider-color-1"></div>
                                </div>
                                <div class="slider-indicator slider-color-1" id="slider-indicator-1" data-value="{{slider1_value}}">{{slider1_value}}</div>
                            </div>
                        </div>

                        <div class="slider-container" id="slider-container-2">
                            <div class="slider-label">{{slider2_label}}</div>
                            <div class="slider">
                                <div class="slider-process-container" id="slider-process-2" data-width="{{slider2_width}}">
                                    <div class="slider-process slider-color-2"></div>
                                </div>
                                <div class="slider-indicator slider-color-2" id="slider-indicator-2" data-value="{{slider2_value}}">{{slider2_value}}</div>
                            </div>
                        </div>

                        <div class="slider-container" id="slider-container-3">
                            <div class="slider-label">{{slider3_label}}</div>
                            <div class="slider">
                                <div class="slider-process-container" id="slider-process-3" data-width="{{slider3_width}}">
                                    <div class="slider-process slider-color-3"></div>
                                </div>
                                <div class="slider-indicator slider-color-3" id="slider-indicator-3" data-value="{{slider3_value}}">{{slider3_value}}</div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Robot -->
                <div class="col-md-12 col-lg-4">
                    <div class="robot">

                        <div class="robot-arms" id="robot-arms-left">
                            <img src="{{background_image_1_robot_left_arms}}">
                        </div>

                        <div class="robot-floating">
                            <img class="robot-image" id="robot-sleep-image" src="{{background_image_1_robot_sleeping}}">
                            <img class="robot-image" id="robot-wake-image" src="{{background_image_1_robot_agency}}"
                                style="opacity: 0">
                        </div>

                        <div class="robot-arms" id="robot-arms-right">
                            <img src="{{background_image_1_robot_right_arms}}">
                        </div>

                    </div>
                </div>

                <!-- Right -->
                <div class="col-md-12 col-lg-4 margin-left-mobile">

                    <label class="label label-right">{{solution_title}}</label>

                    <div class="card card-engagement" id="card-engagement">

                        <!-- Image -->
                        <div class="card-bubble card-bubble-left">
                            <img class="card-bubble-image" src="{{background_image_1_bubble}}" id="card-bubble-image">
                        </div>

                        <!-- Pie -->
                        <div class="card-bubble card-bubble-right">
                            <div class="circle-progress"></div>
                            <div class="circle-progress-label">
                                {{circle_progress_label}}
                            </div>
                        </div>

                        <img class="card-engagement-image" src="{{background_image_1_card}}">

                        <!-- Sticker 1 -->
                        <div class="card-sticker card-sticker-1" id="card-sticker-1">
                            <div class="card-sticker-check">
                                <i class="fa fa-check"></i>
                            </div>
                            {{card_sticker_1}}
                        </div>

                        <!-- Sticker 2 -->
                        <div class="card-sticker card-sticker-2" id="card-sticker-2">
                            <div class="card-sticker-check">
                                <i class="fa fa-check"></i>
                            </div>
                            {{card_sticker_2}}
                        </div>

                        <!-- Sticker 2 -->
                        <div class="card-sticker card-sticker-3" id="card-sticker-3">
                            <div class="card-sticker-check">
                                <i class="fa fa-check"></i>
                            </div>
                            {{card_sticker_3}}
                        </div>
                    </div>
                </div>

            </div>

            <div class="digits-section my-5">
                <div class="digits" id="counter" data-counter-value="{{counter_digits}}"></div>
                <div class="digits-label">{{counter_label}}</div>
            </div>

            <hr class="mt-5" />
        </div>
    </section>

    <!-- Details section -->
    <section id="details-section">
        <div class="container details">

            <!-- Headline -->
            <div class="row">
                <div class="col-12">
                    <h1>{{case_study_title}}</h1>
                </div>
            </div>

            <div class="row">

                <!-- Detail 1 -->
                <div class="detail col-xs-12 col-sm-4">
                    <label class="label-text">{{customer_title}}</label>
                    <div class="detail-text">{{customer_value}}</div>
                </div>

                <!-- Detail 2 -->
                <div class="detail col-xs-12 col-sm-4">
                    <label class="label-text">{{campaign_title}}</label>
                    <div class="detail-text">{{campaign_value}}</div>
                </div>

                <!-- Detail 3 -->
                <div class="detail col-xs-12 col-sm-4">
                    <label class="label-text">{{agency_title}}</label>
                    <div class="detail-text">{{agency_value}}</div>
                </div>
            </div>

            <!-- Left Block -->
            <div class="row">
                <div class="col-md-12 col-lg-6">

                    <div class="text-section my-5">
                        {{case_study_text}}
                    </div>

                    <div class="card overflow-hidden">
                        <iframe class="video-iframe p-3" src="{{case_study_video_link}}" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>

                </div>

                <div class="col-md-12 col-lg-6">
                    <label class="label-text mt-5 mb-3">{{poms_advantages_title}}</label>

                    <ul id="pomsAdvatages">
                        <li><i class="fa fa-check color-3"></i> {{poms_advantages_value_1}}</li>
                        <li><i class="fa fa-check color-3"></i> {{poms_advantages_value_2}}</li>
                        <li><i class="fa fa-check color-3"></i> {{poms_advantages_value_3}}</li>
                        <li><i class="fa fa-check color-3"></i> {{poms_advantages_value_4}}</li>
                        <li><i class="fa fa-check color-3"></i> {{poms_advantages_value_5}}</li>
                    </ul>

                    <label class="label-text mb-3">{{agency_benefits_title}}</label>

                    <ul id="agencyBenefits">
                        <li><i class="fa fa-check color-4"></i> {{agency_benefits_value_1}}</li>
                        <li><i class="fa fa-check color-4"></i> {{agency_benefits_value_2}}</li>
                        <li><i class="fa fa-check color-4"></i> {{agency_benefits_value_3}}</li>
                        <li><i class="fa fa-check color-4"></i> {{agency_benefits_value_4}}</li>
                        <li><i class="fa fa-check color-4"></i> {{agency_benefits_value_5}}</li>
                    </ul>
                </div>


            </div>

            <hr class="mt-5" />
        </div>
    </section>

    <!-- Testimonial section -->
    <section id="testimonial-section">
        <div class="container testimonial">

            <!-- Headline -->
            <div class="row">
                <div class="col-12">
                    <h1>{{testimonial_title}}</h1>
                </div>
            </div>


            <div class="row">

                <div class="col-md-12 col-lg-6 col-xl-5 position-relative">

                    <div class="quote-text testimonial-quote">
                        {{testimonial_quote}}
                    </div>

                    <div class="person-block">
                        <div class="person">
                            <div class="person-name">{{testimonial_person_name}}</div>
                            <div class="person-profession">{{testimonial_person_profession}}</div>
                            <img src="{{background_image_1_testimonial_person}}">
                        </div>
                    </div>
                </div>

                <div class="col-md-12 col-lg-6 col-xl-7">

                    <div class="testimonial-listing">
                        <label class="label-text mb-3">{{testimonial_advertiser_benefits_title}}</label>

                        <ul id="advertiserBenefits">
                            <li><i class="fa fa-check color-1"></i> {{testimonial_advertiser_benefits_value_1}}</li>
                            <li><i class="fa fa-check color-1"></i> {{testimonial_advertiser_benefits_value_2}}</li>
                            <li><i class="fa fa-check color-1"></i> {{testimonial_advertiser_benefits_value_3}}</li>
                            <li><i class="fa fa-check color-1"></i> {{testimonial_advertiser_benefits_value_4}}</li>
                            <li><i class="fa fa-check color-1"></i> {{testimonial_advertiser_benefits_value_5}}</li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <!-- Team quote section -->
    <section id="team-quote-section">
        <div class="container team-quote pb-5">

            <hr />

            <h2>{{team_quote_title}}</h2>

            <div class="row mt-5">
                <div class="quote-text col-md-12 col-lg-9 text-right">
                    {{team_quote_value}}
                </div>
            
                <div class="person-block details-left float-right col-md-12 col-lg-3">
                    <div class="person">
                        <div class="person-name">{{team_quote_person_name}}</div>
                        <div class="person-profession">{{team_quote_person_profession}}</div>
                        <img src="{{background_image_1_team_quote_person}}">
                    </div>
                </div>
            </div>

        </div>
    </section>