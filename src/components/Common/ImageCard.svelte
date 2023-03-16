<script>
  // if (props.width < 768) {
  //   return (
  //     <div class={'ImageCard'}>
  //       <a href={props.href} target="_blank">
  //         <img src={props.imagePath}/>
  //       </a>
  //     </div>
  //   )
  // }
</script>

<div class={'ImageCard animated ' + props.imageClass}>
  <div class="subsection image-container">
    <a href={props.href} target="_blank">
      <div class="img-overlay">
        <div class="text-container">
          <h2>{props.header}</h2>
          <p>{props.description}</p>
        </div>
      </div>
      </a>
    <img src={props.imagePath}/>
  </div>
</div>

<style lang="scss">
  .ImageCard {
    padding: 8px;

    .image-container {
      position: relative;
      display: grid;
      align-items: center;
    }

    .img-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      background: rgba(0, 0, 0, 0.82);
      opacity: 0;
      transition: all 300ms ease-in-out;
      display: grid;
      align-items: center;

      h2, p {
        margin: 0 50px;
        color: white;
      }

      h2 {
        margin-bottom: 8px;
      }

      &:hover {
        opacity: 1;
      }
    }

    @media (max-width: 767px) {
      padding-bottom: 1.5rem;
    }
  }
</style>