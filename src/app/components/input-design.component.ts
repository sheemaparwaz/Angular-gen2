import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "input-design",
  template: `
    <main class="flex flex-col items-start w-full bg-white min-h-[screen]">
      <section
        class="pt-6 pl-4 mt-16 ml-9 text-xs text-black bg-zinc-300 h-[75px] w-[186px]"
      >
        <p>Builderio POC sample</p>
      </section>
    </main>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule],
})
export default class InputDesign {}
