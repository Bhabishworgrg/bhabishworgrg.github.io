function Intro() {
	return (
		<div id='intro' className='h-[95vh] flex items-center justify-center'>
	  		<div className='bg-black rounded-lg max-w-4xl mx-2 sm:mx-6 md:mx-8 lg:mx-10 py-20 px-2 sm:px-4 md:px-6 lg:px-8'>
				<div className='mb-3'>
					$ whoami
				</div>
		 	
				{/* ASCII Art */}
				<div className='ascii-art'>
<pre>888888b.   888               888      d8b          888                                            .d8888b.                                              </pre>
<pre>888  "88b  888               888      Y8P          888                                           d88P  Y88b                                             </pre>
<pre>888  .88P  888               888                   888                                           888    888                                             </pre>
<pre>8888888K.  88888b.   8888b.  88888b.  888 .d8888b  88888b.  888  888  888  .d88b.  888d888       888        888  888 888d888 888  888 88888b.   .d88b.  </pre>
<pre>888  "Y88b 888 "88b     "88b 888 "88b 888 88K      888 "88b 888  888  888 d88""88b 888P"         888  88888 888  888 888P"   888  888 888 "88b d88P"88b </pre>
<pre>888    888 888  888 .d888888 888  888 888 "Y8888b. 888  888 888  888  888 888  888 888           888    888 888  888 888     888  888 888  888 888  88b8</pre>
<pre>888   d88P 888  888 888  888 888 d88P 888      X88 888  888 Y88b 888 d88P Y88..88P 888           Y88b  d88P Y88b 888 888     Y88b 888 888  888 Y88b 88b8</pre>
<pre>8888888P"  888  888 "Y888888 88888P"  888  88888P' 888  888  "Y8888888P"   "Y88P"  888            "Y8888P88  "Y88888 888      "Y88888 888  888  "Y8888b8</pre>
<pre>                                                                                                                                                    88b8</pre>
<pre>                                                                                                                                               Y8b d88bP</pre>
<pre>                                                                                                                                                "Y88P"  </pre>
				</div>
				
				<div className='mt-3'>
					$ cat tagline.txt
					<br />
					Building things, one commit at a time.
			  	</div>

				<div className='mt-3'>
					$ 
					<span className='blinking-cursor'>_</span>
				</div>
			</div>
		</div>
	);
}

export default Intro;
