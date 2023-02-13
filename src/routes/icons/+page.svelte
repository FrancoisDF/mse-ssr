<script lang="ts">

	let open = false;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="Icons" />
</svelte:head>
<se-container position="absolute">
	<se-block>
		<se-block-header>Icons</se-block-header>
		<se-block-content>
			<div class="mycoolstyle">my content</div>
			<ul>
				...
			</ul>
			<se-checkbox option="onoff"></se-checkbox>
		</se-block-content>
		<se-block-footer>
			<se-button option="raised" on:click={()=>{ open=true}}>open dialog</se-button>
			<se-button option="raised" color="primary">
				RaisedGreen
			</se-button>
			<se-button option="text">Text</se-button>
			<se-button option="text" color="primary">
				Primary
			</se-button>
		</se-block-footer>
	</se-block>
</se-container>
<se-dialog id="dialog-simple-notitle" color="alternative" size="small" {open} on:didClose={()=>{open=false}}>
  <se-dialog-content
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </se-dialog-content>
  <se-dialog-footer>
    <se-button on:click={()=>{open=false}}>OK
    </se-button>
  </se-dialog-footer>
</se-dialog>
