import { Component, h, Prop} from "@stencil/core";

@Component({
    tag: 'webtraining-personal-card',
    styleUrl: 'webtraining-personal-card.css'
})
export class WebtrainingPersonalCard {

    @Prop() firtsname: string = '';
    @Prop() lastname: string = '';
    @Prop() photo: string = '';


    render () {
        return (
            <div class="b-personal-card-box">
                <div class="b-personal-card">
                    <div class="b-personal-card__photo-container">
                        <img class="b-personal-card__photo" src="" alt="Imagen de Nuria Castaño"/>
                    </div>
                    <h2 class="b-personal-card__full-name">{this.firtsname} {this.lastname}</h2>
                    <div class="b-personal-card__resume">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum explicabo ratione eum harum ex cupiditate asperiores fugiat quis sunt deserunt voluptatibus fugit odit vero aspernatur, voluptate expedita pariatur laboriosam nemo?
                    </div>
                </div>
            </div>
        );
    }
}