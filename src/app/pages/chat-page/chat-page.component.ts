import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { messages, MessageThread, Message } from 'src/app/sources/message';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {
  message: MessageThread | undefined; // Tambahkan tipe data untuk properti message
  newReplyMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const routeParams = this.route.snapshot.paramMap;
      const usernameFromRoute = String(routeParams.get('username'));

      this.message = messages.find(message => message.username === usernameFromRoute);
    });
  }

  // Fungsi untuk menambah pesan reply
  addReplyMessage(): void {
    if (this.message && this.newReplyMessage.trim() !== '') {
      // Buat objek pesan reply baru
      const newReply: Message = {
        id: this.message.messages.reply.length + 1,
        message: this.newReplyMessage,
      };

      // Tambahkan pesan reply baru ke dalam objek messages
      this.message.messages.reply.push(newReply);

      // Reset input setelah pesan ditambahkan
      this.newReplyMessage = '';
    }
  }

  // Fungsi untuk menghapus pesan reply berdasarkan ID
  deleteReplyMessage(replyId: number): void {
    if (this.message) {
      const replyIndex = this.message.messages.reply.findIndex(reply => reply.id === replyId);

      if (replyIndex !== -1) {
        this.message.messages.reply.splice(replyIndex, 1);
      }
    }
  }

}

