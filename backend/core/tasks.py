from celery import shared_task


@shared_task
def health_check_task() -> dict[str, str]:
    return {"status": "ok"}
