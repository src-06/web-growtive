<?php

namespace App\Enums;

enum Role: string {
  case SYSTEM = 'system';
  case ADMIN = 'admin';
  case USER = 'user';
}
