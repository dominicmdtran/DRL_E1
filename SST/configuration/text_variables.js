// instructions page 1
var page1 = [
  '<p> Please read the instructions below carefully, it will help you with the game in this experiment. </p> '+ '<br>' +
  '<p> Your task is to respond to black arrows that appear on the screen. </p> '+
  '<p> Press the LEFT ARROW KEY with the right index finger when you see a LEFT ARROW and press the RIGHT ARROW KEY with the right middle finger when you see a RIGHT ARROW. </p>'+
  '<p> Thus, left arrow = left key and right arrow = right key. </p>'+ '<br>' +
  '<p> However, on some trials (stop-signal trials) a blue square will appear after a variable delay. This indicates that you have to withhold your response. </p>'+
  '<p> On approximately half of the stop-signal trials, the blue square will appear soon and you will notice that it will be easy to stop your response. </p>'+
  '<p> On the other half of the trials, the blue square will appear late and it will become very difficult or even impossible to stop your response. </p>' + '<br>' +
  '<p> It is really important that you do not wait for the blue square to appear and that you respond as quickly and as accurately as possible to the arrows. </p>' +
  '<p> After all, if you start waiting for the blue square, the program will delay the presentation of the square. This will result in long reaction times. </p>'
];

// instructions page 2
// Do not forget to adjust the number of blocks
page2 = [
  '<p> We will start with a short practice block in which you will receive immediate feedback. You will no longer receive immediate feedback in the experimental phase. </p>'+
  '<p> However, at the end of each experimental block, there will be a short break. During this break, we will show you some information about your mean performance in the previous block.</p>'
];

// informed consent text
var informed_consent_text_old = [
  '<p> By starting the experiment you are acknowledging that you have read the Participant Information Statement and consent to participating. </p>' +
  '<p> You can withdraw from the experiment at any time before the task ends, but will not receive the full credit unless you finish the experiment. </p>' +
  '<p> Once you complete the experiment, you can no longer withdraw your consent or have your data removed because it will be annoyomous. </p>'
];

var informed_consent_text = [
  '		<div class="consent" style="text-align:left; border:0px solid; padding:10px;  width:800px; font-size:90%; float:right">' +
  '			<p align="right">Approval No ' + '2020/208' + '</p>' +
  '			<p align="center"><b>THE UNIVERSITY OF SYDNEY<br>' +
  '			PARTICIPANT INFORMATION STATEMENT</b><br><br>' + 'Executive function and response control' + '</p>' +

  '			<p><b>(1) What is this study about?</b></p>' +
  '			<p>You are invited to take part in a research study investigating how cognitive and individual differences factors influence our ability to act or withhold actions when needed.</p>' +
  '			<p>You have been invited to participate in this study because you have expressed interest through the first- and second-year psychology participant pool (SONA). This Participant Information Statement tells you about the research study. Knowing what is involved will help you decide if you want to take part in the research.</p>' +
  '			<p>Please read the content carefully and ask questions about anything that you do not understand or want to know more about.</p>' +
  '			<p>Participation in this research study is voluntary. </p>' +
  '			<p>By giving your consent to take part in this study you are telling us that you:</p>' +
  '			<p><ul><li>	Understand what you have read.</li></p>' +
  '			<p><li>	Agree to take part in the research study as outlined below.</li></p>' +
  '			<p><li>	Agree to the use of your personal information as described.</li></ul></p>' +

  '			<p><b>(2)	Who is running the study?</b></p>' +
  '			<p>The study is being carried out by the following researchers:</p>' +
  '			<p>	A/Prof. Evan Livesey, Dr. Dominic Tran, Justine Greenaway, Julie Chow, Illeana Prieto, and Julia Lui.</p>' +

  '			<p><b>(3)	What will the study involve for me?</b></p>' +
  '			<p>During the experiment, you will be asked to view and respond to visual stimuli presented on a computer screen. The exact stimuli will depend on which experiment you are doing, but they can be simple shapes, familiar objects, faces, words, letters or other symbols. Your task will be either to identify what the stimulus is, judge its orientation, location or direction of motion, or simply respond to its appearance, as instructed by the experimenter. You will have to respond by pressing some buttons. Other parts of the experiment may require you to use your memory and problem-solving abilities or answer a questionnaire about your daily habits.</p>'+

  '     <p><b>(4)	How much of my time will the study take?</b></p>' +
  '			<p>The study should take approximately 60 minutes to complete. If you have completed the experiment seriously and finish in less time, you will still be provided with the full credit.</p>' +

  '     <p><b>(5)	Who can take part in the study?</b></p>' +
  '			<p>The study is open to all who may be interested.</p>' +

  '     <p><b>(6)	Do I have to be in the study? Can I withdraw from the study once I have started?</b></p>' +
  '			<p>Being in this study is completely voluntary and you do not have to take part. Your decision whether to participate will not affect your current or future relationship with the researchers or anyone else at the University of Sydney.</p>' +
  '			<p>If you decide to take part in the study and then change your mind later, you are free to withdraw at any time before the experiment ends. You can do this by informing the researcher. Starting the experiment and submitting your final response is taken as an indication of your consent to participate in the study.</p>' +
  '			<p>If you decide to withdraw from the study while completing the task, we will not record any data from you. Simply inform the experimenter if you wish for any data collected prior to your withdrawal to be removed from the data set. You cannot withdraw from the study once you have completed the final question as your data are saved anonymously and we will not know which data set to remove.</p>' +

  '     <p><b>(7)	Are there any risks or costs associated with being in the study?</b></p>' +
  '			<p>Aside from giving up your time, we do not expect that there will be any risks or costs associated with taking part in this study.</p>' +

  '     <p><b>(8)	Are there any benefits associated with being in the study?</b></p>' +
  '			<p>We cannot guarantee that you will receive any direct benefits from being in the study. However, you will help the researchers understand the factors and conditions that lead to errors and how such errors can be minimised.</p>' +
  '     <p>Your participation will also be an opportunity for you to learn more about Psychological research and you will be provided with 1 credit of course participation.</p>' +

  '     <p><b>(9)	What will happen to information about me that is collected during the study?</b></p>' +
  '			<p>By providing your consent, you are agreeing to us collecting information about your responses in the experiment for the purposes of this research study. Your information will only be used for the purposes outlined in this Participant Information Statement, unless you consent otherwise.</p>' +
  '			<p>Your information will be stored securely in a de-identified manner and your identity/personal sign-up information will be kept strictly confidential, except as required by law. Study findings may be published, but you will not be individually identifiable in these publications. Results will be presented in aggregate form.</p>' +
  '			<p>We will keep the information we collect for this study, and we may use it in future projects. By providing your consent you are allowing us to use your anonymous information in future projects. We do not know at this stage what these other projects will involve. We will seek ethical approval before using the information in these future projects.</p>' +

  '     <p><b>(10)	Can I tell other people about the study?	</b></p>' +
  '			<p>Please keep the content of the study to yourself to prevent response bias if other people were to participate in this research study at a later date.</p>' +

  '     <p><b>(11)	What if I would like further information about the study?	</b></p>' +
  '			<p>You can contact the relevant researcher who conducted your experiment or posted the advertisement if you require further information about the study. The researchers include A/Prof. Evan Livesey, Dr. Dominic Tran, Justine Greenaway, Julie Chow, Illeana Prieto, and Julia Lui.</p>' +

  '     <p><b>(12)	Will I be told the results of the study?	</b></p>' +
  '			<p>You have a right to receive feedback about the overall results of this study. You can tell us that you wish to receive feedback by contacting the relevant researcher who conducted your experiment or posted the advertisement. This feedback will be in the form of a brief written summary and a captioned figure with aggregate data. You will receive this feedback after the study is finished.</p>' +

  '     <p><b>(13) What if I have a complaint or any concerns about the study?</b></p>' +
  '			<p>Research involving humans in Australia is reviewed by an independent group of people called a Human Research Ethics Committee (HREC). The ethical aspects of this study have been approved by the HREC of the University of Sydney (protocol number '+ '2020/208' +').  As part of this process, we have agreed to carry out the study according to the National Statement on Ethical Conduct in Human Research (2007). This statement has been developed to protect people who agree to take part in research studies.</p>' +
  '			<p>If you are concerned about the way this study is being conducted or you wish to make a complaint to someone independent from the study, please contact the university using the details outlined below. Please quote the study title and protocol number. </p>' +
  '			<p>The Manager, Ethics Administration, University of Sydney:</p>' +
  '			<p><ul><li> Telephone: +61 2 8627 8176</li></p>' +
  '			<p><li> Email: ro.humanethics@sydney.edu.au</li></ul></p>' +

  '			<p align="center"><b>PARTICIPANT CONSENT</b></p>' +
  '			By continuing, you are making a decision whether or not to participate. Clicking the button below indicates that, having read the information provided on the participant information sheet, you have decided to participate.' +
  '			<br>' +
  '			<p>To withdraw your consent, simply close the browser tab and notify the experimenter by email. Your data will be deleted from our records.</p>' +
  '		</div><br>'
];

// trial by trial feedback messages
correct_msg = '<p> correct </p>'
incorrect_msg = '<p> incorrect </p>'
too_slow_msg = '<p> not quick enough </p>'
too_fast_msg = '<p> too fast </p>'
correct_stop_msg = '<p> correct </p>'
incorrect_stop_msg = '<p> do not respond </p>'

// block feedback
no_signal_header = "<p><b>NO-SIGNAL TRIALS: </b></p>"
avg_rt_msg = "<p>Average response time = %d milliseconds</p>"
prop_miss_msg = "<p>Proportion missed go = %.2f (should be 0)</p>"
absolute_miss_msg = "<p>Number of missed responses = %.2f</p>"
incorr_go_msg = "<p>Number of incorrect responses = %.2f</p>"
stop_signal_header = "<p><b>SIGNAL TRIALS: </b></p>"
prop_corr_msg = "<p>Proportion correct stops = %.2f</p>" + "<br>"
next_block_msg = "<p>You can take a short break, the next block starts in <span id='timer'>15</span></p>"
final_block_msg = "<p>Press space to continue...</p>" // after the final block they don't need a break

// other
var label_previous_button = 'Previous';
var label_next_button = 'Next';
var label_consent_button = 'I agree';
var full_screen_message = '<p>The experiment will switch to fullscreen mode when you push the button below. </p>';
var welcome_message = [
  '<div class="consent" style="text-align:left; border:0px solid; padding:10px;  width:800px; font-size:90%; float:right">' +
    '<p align="center"><b>BRAIN AND BEHAVIOUR LAB, THE UNIVERSITY OF SYDNEY</b></p>' +
    '<p>You are invited to participate in an experiment investigating the factors that influence our ability to act and withhold actions. You were selected as a possible participant in this study because you accepted our advertisement on SONA.</p>' +
    '<p>If you decide to participate, we will present you with some stimuli and you will be asked to respond quickly to some images and to withhold your response to other images. Detailed instructions will be provided once the task begins.</p>' +
    '<p>The experiment has THREE parts and in total it should take approximately 60 minutes to complete including reading time.<p/>' +
    '<p>Press "Next" to begin.</p>' +
  '</div>']
  
var not_supported_message = ['<p>This experiment requires the Chrome or Firefox webbrowser.</p>'];
var subjID_instructions = "Enter your participant ID."
var age_instructions = "Enter your age."
var gender_instructions = "Choose your gender."
var gender_options = ['Female','Male', 'Other', 'Prefer not to say']
var text_at_start_block = '<p>Press space to begin.</p>'
var text_at_start_session_1 = "<p>Well done! You have completed 1 of 2 sessions in this game. </p>" +
  "<p> Take a break and press space when you are ready to continue.</p>"
//var text_at_start_session_2 = "<p>Well done! You have completed 2 of 4 sessions. The next part is the same task but there will be no practice block. </p>" +
  //"<p> Take a break and press space when you are ready to continue.</p>"
//var text_at_start_session_3 = "<p>Well done! You have completed 3 of 4 sessions. The next part is the same task and there will be no practice block. </p>" +
  //"<p> Take a break and press space when you are ready to continue.</p>"
var get_ready_message = '<p>Get ready...</p>'
var fixation_text = '<div style="font-size:60px;">TEST</div>'
var end_message_1 = "<p>Well done! You have just completed the second part of the expertiment.</p>"
var end_message_2 = "<p>Please press spacebar to complete the final part of the experiment.</p>"
